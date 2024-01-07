package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.KanjiDto;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;
import whale.dashboard.entity.Yomi;
import whale.dashboard.exception.CategoryNotFoundException;
import whale.dashboard.exception.KanjiNotFoundException;
import whale.dashboard.repository.CategoryRepository;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.YomiRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class KanjiService {

    private final CategoryRepository categoryRepository;
    private final KanjiRepository kanjiRepository;
    private final YomiRepository yomiRepository;


    @Transactional
    public void registerKanji(Long categoryId, List<KanjiDto.RegistrationRequest> requests) {
        List<Kanji> kanjiList = KanjiDto.RegistrationRequest.toEntityList(categoryId, requests, categoryRepository);
        kanjiRepository.saveAll(kanjiList);
    }


    @Transactional
    public void modifyKanjis(List<KanjiDto.ModifyRequest> requests) {
        for (KanjiDto.ModifyRequest request : requests) {
            Kanji kanji = kanjiRepository.findById(request.getId())
                    .orElseThrow(() -> new KanjiNotFoundException("Kanji Not Found with id : " + request.getId()));

            Category category = categoryRepository.findById(request.getCategoryId())
                    .orElseThrow(() -> new CategoryNotFoundException(request.getCategoryId()));

            kanji.change(category, request.getName(), request.getSound(), request.getMeaning(), request.getStrokeCount());
        }
    }

    @Transactional
    public void removeKanjis(List<Long> kanjiIdList) {
        for (Long kanjiId : kanjiIdList) {
            Kanji kanji = kanjiRepository.findById(kanjiId)
                    .orElseThrow(() -> new KanjiNotFoundException("Kanji Not Found with id : " + kanjiId));

            List<Yomi> yomis = yomiRepository.findAllByKanji(kanji);
            for (Yomi yomi : yomis) {
                yomi.kanjiSetNull();
            }
            kanjiRepository.delete(kanji);
        }
    }

    public Page<KanjiDto.Response> findByCategoryId(Long categoryId, Pageable pageable) {
        return kanjiRepository.findByCategoryId(categoryId, pageable)
                .map(KanjiDto.Response::of);
    }
}
