package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.service.CategoryService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CategoryApiController {

    private final CategoryService categoryService;

    @PostMapping("/vocabulary/{id}/categories")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody List<CategoryDto.RegistrationRequest> requests) {
        categoryService.registerCategory(id, requests);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/vocabulary/{id}/categories")
    public Page<CategoryDto.Response> getResponse(
            @PathVariable Long id,
            @PageableDefault Pageable pageable) {
        return categoryService.findByVocabularyId(id, pageable);
    }
}
