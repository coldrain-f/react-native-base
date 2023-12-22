package whale.dashboard.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.repository.VocabularyRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class VocabularyService {

    private final VocabularyRepository vocabularyRepository;

    @Transactional
    public void registerVocabulary(List<VocabularyDto.RegistrationRequest> requests) {
        List<Vocabulary> vocabularyList = VocabularyDto.RegistrationRequest.toEntityList(requests);
        vocabularyRepository.saveAll(vocabularyList);
    }


    @Transactional
    public void modifyVocabulary(List<VocabularyDto.ModifyRequest> requests) {
        for (VocabularyDto.ModifyRequest request : requests) {
            Vocabulary vocabulary = vocabularyRepository.findById(request.getId())
                    .orElseThrow(() -> new VocabularyNotFoundException("Vocabulary Not Found with id : " + request.getId()));

            vocabulary.change(request.getTitle(), request.getDescription());
            vocabularyRepository.save(vocabulary);
        }
    }


    @Transactional
    public void removeVocabulary(List<Long> vocabularyIds) {
        for (Long vocabularyId : vocabularyIds) {
            Vocabulary vocabulary = vocabularyRepository.findById(vocabularyId)
                    .orElseThrow(() -> new VocabularyNotFoundException("Vocabulary Not Found with id : " + vocabularyId));
            // 자식 삭제 구현 예정
            vocabularyRepository.delete(vocabulary);
        }
    }


    public Page<VocabularyDto.Response> findAllVocabulary(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Vocabulary> vocabularyPage = vocabularyRepository.findAll(pageable);
        return vocabularyPage.map(VocabularyDto.Response::of);
    }
}
