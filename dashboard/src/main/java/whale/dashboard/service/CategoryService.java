package whale.dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.entity.Category;
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
}
