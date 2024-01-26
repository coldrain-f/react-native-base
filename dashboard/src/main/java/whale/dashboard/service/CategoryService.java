package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Kanji;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.exception.CategoryNotFoundException;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.repository.CategoryRepository;
import whale.dashboard.repository.KanjiRepository;
import whale.dashboard.repository.VocabularyRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final VocabularyRepository vocabularyRepository;
    private final KanjiRepository kanjiRepository;


    @Transactional
    public void registerCategory(Long vocabularyId, List<CategoryDto.RegistrationRequest> requests) {
        List<Category> categoryList = CategoryDto.RegistrationRequest.toEntityList(vocabularyId, requests, vocabularyRepository);
        categoryRepository.saveAll(categoryList);
    }


    @Transactional
    public void modifyCategories(List<CategoryDto.ModifyRequest> requests) {
        for (CategoryDto.ModifyRequest request : requests) {
            Category category = categoryRepository.findById(request.getId())
                    .orElseThrow(() -> new CategoryNotFoundException(request.getId()));

            category.change(request.getSubject(), request.getDescription());
        }

    }


    @Transactional
    public void removeCategories(List<Long> categoryIdList) {
        for (Long categoryId : categoryIdList) {
            Category category = categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new CategoryNotFoundException(categoryId));

            List<Kanji> kanjis = kanjiRepository.findAllByCategory(category);
            for (Kanji kanji : kanjis) {
                kanji.change(kanji.getName(), kanji.getSound(), kanji.getMeaning(), kanji.getStrokeCount());
            }

            categoryRepository.delete(category);
        }
    }


    public Page<CategoryDto.Response> findByVocabularyId(Long vocabularyId, Pageable pageable) {
        return categoryRepository.findByVocabularyId(vocabularyId, pageable)
                .map(CategoryDto.Response::of);
    }
}
