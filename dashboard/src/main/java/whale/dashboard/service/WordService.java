package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.WordDto;
import whale.dashboard.entity.Furigana;
import whale.dashboard.entity.Word;
import whale.dashboard.entity.Yomi;
import whale.dashboard.exception.WordNotFoundException;
import whale.dashboard.exception.YomiNotFoundException;
import whale.dashboard.repository.FuriganaRepository;
import whale.dashboard.repository.WordRepository;
import whale.dashboard.repository.YomiRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class WordService {

    private final YomiRepository yomiRepository;
    private final WordRepository wordRepository;
    private final FuriganaRepository furiganaRepository;


    @Transactional
    public void registerWords(Long categoryId, List<WordDto.RegistrationRequest> requests) {
        List<Word> wordList = WordDto.RegistrationRequest.toEntityList(categoryId, requests, yomiRepository);
        wordRepository.saveAll(wordList);
    }


    @Transactional
    public void modifyWords(List<WordDto.ModifyRequest> requests) {
        for (WordDto.ModifyRequest request : requests) {
            Word word = wordRepository.findById(request.getId())
                    .orElseThrow(() -> new WordNotFoundException("Word Not Found with id : " + request.getId()));

            Yomi yomi = yomiRepository.findById(request.getYomiId())
                    .orElseThrow(() -> new YomiNotFoundException("Yomi Not Found with id : " + request.getYomiId()));

            word.change(yomi, request.getName(), request.getMeaning());
        }
    }

    @Transactional
    public void removeWords(List<Long> wordIdList) {
        for (Long wordId : wordIdList) {
            Word word = wordRepository.findById(wordId)
                    .orElseThrow(() -> new WordNotFoundException("Word Not Found with id : " + wordId));

            List<Furigana> furiganas = furiganaRepository.findAllByWord(word);
            for (Furigana furigana : furiganas) {
                furigana.wordSetNull();
            }

            wordRepository.delete(word);
        }
    }
}
