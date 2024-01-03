package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.YomiDto;
import whale.dashboard.entity.Yomi;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.YomiRepository;
import whale.dashboard.repository.YomiTypeRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class YomiService {

    private final KanjiRepository kanjiRepository;
    private final YomiRepository yomiRepository;
    private final YomiTypeRepository yomiTypeRepository;


    @Transactional
    public void registerYomi(Long kanjiId, List<YomiDto.RegistrationRequest> requests) {
        List<Yomi> yomiList = YomiDto.RegistrationRequest.toEntityList(kanjiId, requests, kanjiRepository, yomiTypeRepository);
        yomiRepository.saveAll(yomiList);
    }
}
