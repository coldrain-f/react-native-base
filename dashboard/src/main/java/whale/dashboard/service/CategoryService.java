package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.exception.CategoryNotFoundException;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.repository.CategoryRepository;
import whale.dashboard.repository.VocabularyRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final VocabularyRepository vocabularyRepository;

    @Transactional
    public void registerCategory(Long vocabularyId, List<CategoryDto.RegistrationRequest> requests) {
        List<Category> categoryList = CategoryDto.RegistrationRequest.toEntityList(vocabularyId, requests, vocabularyRepository);
        categoryRepository.saveAll(categoryList);
    }

    @Transactional
    public void modifyCategories(List<CategoryDto.ModifyRequest> requests) {
        for (CategoryDto.ModifyRequest request : requests) {
            Category category = categoryRepository.findById(request.getId())
                    .orElseThrow(() -> new CategoryNotFoundException("Category Not Found with id : " + request.getId()));

            Vocabulary vocabulary = vocabularyRepository.findById(request.getVocabularyId())
                    .orElseThrow(() -> new VocabularyNotFoundException("Vocabulary Not Found with id : " + request.getVocabularyId()));

            category.change(vocabulary, request.getSubject(), request.getDescription());
        }

    }


    public Page<CategoryDto.Response> findByVocabularyId(Long vocabularyId, Pageable pageable) {
        return categoryRepository.findByVocabularyId(vocabularyId, pageable)
                .map(CategoryDto.Response::of);
    }
}
