package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.YomiDto;
import whale.dashboard.entity.Word;
import whale.dashboard.entity.Yomi;
import whale.dashboard.exception.YomiNotFoundException;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.WordRepository;
import whale.dashboard.repository.YomiRepository;
import whale.dashboard.repository.YomiTypeRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class YomiService {

    private final WordRepository wordRepository;
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
                    .orElseThrow(() -> new YomiNotFoundException(request.getId()));
            yomi.change(request.getName());
        }
    }

    @Transactional
    public void removeYomi(List<Long> yomiIdList) {
        for (Long yomiId : yomiIdList) {
            Yomi yomi = yomiRepository.findById(yomiId)
                    .orElseThrow(() -> new YomiNotFoundException(yomiId));

            List<Word> words = wordRepository.findAllByYomi(yomi);
            for (Word word : words) {
                word.yomiSetNull();
            }

            yomiRepository.delete(yomi);
        }
    }

    public Page<YomiDto.Response> findByKanjiId(Long kanjiId, Pageable pageable) {
        return yomiRepository.findByKanjiId(kanjiId, pageable)
                .map(YomiDto.Response::of);
    }
}
