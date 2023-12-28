package whale.dashboard.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.repository.CategoryRepository;
import whale.dashboard.repository.VocabularyRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class VocabularyService {

    private final VocabularyRepository vocabularyRepository;
    private final CategoryRepository categoryRepository;

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
        }
    }


    @Transactional
    public void removeVocabulary(List<Long> vocabularyIds) {
        for (Long vocabularyId : vocabularyIds) {
            Vocabulary vocabulary = vocabularyRepository.findById(vocabularyId)
                    .orElseThrow(() -> new VocabularyNotFoundException("Vocabulary Not Found with id : " + vocabularyId));

            List<Category> categories = categoryRepository.findAllByVocabulary(vocabulary);
            for (Category category : categories) {
                category.change(null, category.getSubject(), category.getDescription());
            }

            vocabularyRepository.delete(vocabulary);
        }
    }


    public Page<VocabularyDto.Response> findAllVocabulary(Pageable pageable) {
        return vocabularyRepository.findAll(pageable)
            .map(VocabularyDto.Response::of);
    }
}
