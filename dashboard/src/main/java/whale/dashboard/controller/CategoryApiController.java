package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.CategoryDto;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.service.CategoryService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class CategoryApiController {

    private final CategoryService categoryService;

    @PostMapping("/vocabulary/{id}/categories")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody @Valid List<CategoryDto.RegistrationRequest> requests) {
        categoryService.registerCategory(id, requests);
        return ResponseEntity.ok().build();
    }


    @PatchMapping("/categories")
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<CategoryDto.ModifyRequest> requests) {
        categoryService.modifyCategories(requests);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/categories")
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        categoryService.removeCategories(request.getIdList());
        return ResponseEntity.ok().build();
    }


    @GetMapping("/vocabulary/{id}/categories")
    public Page<CategoryDto.Response> getResponse(
            @PathVariable Long id,
            @PageableDefault Pageable pageable) {
        return categoryService.findByVocabularyId(id, pageable);
    }
}
