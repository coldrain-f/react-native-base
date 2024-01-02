package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.KanjiDto;
import whale.dashboard.entity.Kanji;
import whale.dashboard.repository.CategoryRepository;
import whale.dashboard.repository.KanjiRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class KanjiService {

    private final CategoryRepository categoryRepository;
    private final KanjiRepository kanjiRepository;


    @Transactional
    public void registerKanji(Long categoryId, List<KanjiDto.RegistrationRequest> requests) {
        List<Kanji> kanjiList = KanjiDto.RegistrationRequest.toEntityList(categoryId, requests, categoryRepository);
        kanjiRepository.saveAll(kanjiList);
    }


}
