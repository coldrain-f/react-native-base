package whale.dashboard.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.repository.VocabularyRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class VocabularyService {

    private final VocabularyRepository vocabularyRepository;

    @Transactional
    public List<Long> registerVocabulary(List<VocabularyDto.RegistrationRequest> requests) {
        List<Long> savedVocabulary = new ArrayList<>();

        for (VocabularyDto.RegistrationRequest request : requests) {
            final Vocabulary vocabulary = Vocabulary.builder()
                    .title(request.getTitle())
                    .description(request.getDescription())
                    .build();

            final Vocabulary savedId = vocabularyRepository.save(vocabulary);
            savedVocabulary.add(savedId.getId());
        }

        return savedVocabulary;
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

    public List<Vocabulary> findAllVocabulary() {
        // 페이징 구현 예정
        return vocabularyRepository.findAll();
    }
}
