package whale.dashboard;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.entity.*;
import whale.dashboard.repository.*;

import javax.annotation.PostConstruct;

@Slf4j
@Component
@Profile("test") // 테스트 프로파일에서만 동작
public class SampleDataInitializer {

    private final VocabularyRepository vocabularyRepository;
    private final CategoryRepository categoryRepository;
    private final KanjiRepository kanjiRepository;
    private final YomiTypeRepository yomiTypeRepository;
    private final YomiRepository yomiRepository;
    private final WordRepository wordRepository;
    private final FuriganaRepository furiganaRepository;

    @Autowired
    public SampleDataInitializer(VocabularyRepository vocabularyRepository, CategoryRepository categoryRepository, KanjiRepository kanjiRepository, YomiTypeRepository yomiTypeRepository, YomiRepository yomiRepository, WordRepository wordRepository, FuriganaRepository furiganaRepository) {
        this.vocabularyRepository = vocabularyRepository;
        this.categoryRepository = categoryRepository;
        this.kanjiRepository = kanjiRepository;
        this.yomiTypeRepository = yomiTypeRepository;
        this.yomiRepository = yomiRepository;
        this.wordRepository = wordRepository;
        this.furiganaRepository = furiganaRepository;
    }


    @PostConstruct
    @Transactional
    public void init() {
        dbInit1();
    }

    private void dbInit1() {
        Vocabulary vocabulary1 = Vocabulary.builder()
                .title("Vocabulary 1")
                .description("Description 1")
                .build();
        vocabularyRepository.save(vocabulary1);

        Vocabulary vocabulary2 = Vocabulary.builder()
                .title("Vocabulary 2")
                .description("Description 2")
                .build();
        vocabularyRepository.save(vocabulary2);


        Category category1 = Category.builder()
                .vocabulary(vocabulary1)
                .subject("Category 1")
                .description("Category Description 1")
                .build();
        categoryRepository.save(category1);

        Category category2 = Category.builder()
                .vocabulary(vocabulary2)
                .subject("Category 2")
                .description("Category Description 2")
                .build();
        categoryRepository.save(category2);

        Kanji kanji1 = Kanji.builder()
                .category(category1)
                .name("kanji 1")
                .meaning("kanji 1 meaning")
                .sound("kanji 1 sound")
                .strokeCount("1")
                .build();
        kanjiRepository.save(kanji1);

        Kanji kanji2 = Kanji.builder()
                .category(category2)
                .name("kanji 1")
                .meaning("kanji 2 meaning")
                .sound("kanji 2 sound")
                .strokeCount("2")
                .build();
        kanjiRepository.save(kanji2);

        YomiType yomiType1 = YomiType.builder()
                .name("onyomi 1")
                .build();
        yomiTypeRepository.save(yomiType1);

        YomiType yomiType2 = YomiType.builder()
                .name("kunyomi 1")
                .build();
        yomiTypeRepository.save(yomiType2);

        Yomi yomi1 = Yomi.builder()
                .name("yomi 1")
                .yomiType(yomiType1)
                .kanji(kanji1)
                .build();
        yomiRepository.save(yomi1);

        Yomi yomi2 = Yomi.builder()
                .name("yomi 2")
                .yomiType(yomiType2)
                .kanji(kanji1)
                .build();
        yomiRepository.save(yomi2);

        Word word1 = Word.builder()
                .name("word 1")
                .meaning("word meaning 1")
                .yomi(yomi1)
                .build();
        wordRepository.save(word1);

        Word word2 = Word.builder()
                .name("word 2")
                .meaning("word meaning 2")
                .yomi(yomi2)
                .build();
        wordRepository.save(word2);


        Furigana furigana1 = Furigana.builder()
                .token("token 1")
                .reading("reading 1")
                .word(word1)
                .build();
        furiganaRepository.save(furigana1);

        Furigana furigana2 = Furigana.builder()
                .token("token 2")
                .reading("reading 2")
                .word(word2)
                .build();
        furiganaRepository.save(furigana2);
    }
}