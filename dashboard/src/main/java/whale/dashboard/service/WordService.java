package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.WordDto;
import whale.dashboard.entity.Word;
import whale.dashboard.repository.WordRepository;
import whale.dashboard.repository.YomiRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class WordService {

    private final YomiRepository yomiRepository;
    private final WordRepository wordRepository;


    @Transactional
    public void registerWords(Long categoryId, List<WordDto.RegistrationRequest> requests) {
        List<Word> wordList = WordDto.RegistrationRequest.toEntityList(categoryId, requests, yomiRepository);
        wordRepository.saveAll(wordList);
    }
}
