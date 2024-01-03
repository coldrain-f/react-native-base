package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.YomiDto;
import whale.dashboard.entity.Yomi;
import whale.dashboard.exception.YomiNotFoundException;
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


    @Transactional
    public void modifyYomi(List<YomiDto.ModifyRequest> requests) {
        for (YomiDto.ModifyRequest request : requests) {

            Yomi yomi = yomiRepository.findById(request.getId())
                    .orElseThrow(() -> new YomiNotFoundException("Yomi Not Found with id : " + request.getId()));
            yomi.change(request.getName());
        }
    }
}
