package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.FuriganaDto;
import whale.dashboard.entity.Furigana;
import whale.dashboard.repository.FuriganaRepository;
import whale.dashboard.repository.WordRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FuriganaService {

    private final WordRepository wordRepository;
    private final FuriganaRepository furiganaRepository;


    @Transactional
    public void registerFurigana(Long wordId, List<FuriganaDto.RegistrationRequest> requests) {
        List<Furigana> furiganaList = FuriganaDto.RegistrationRequest.toEntityList(wordId, requests, wordRepository);
        furiganaRepository.saveAll(furiganaList);
    }
}
