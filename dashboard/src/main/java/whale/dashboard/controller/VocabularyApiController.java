package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.service.VocabularyService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vocabulary")
@Validated
public class VocabularyApiController {

    private final VocabularyService vocabularyService;

    @PostMapping
    public ResponseEntity<Void> register(
             @RequestBody @Valid List<VocabularyDto.RegistrationRequest> requests) {
        vocabularyService.registerVocabulary(requests);
        return ResponseEntity.ok().build();
    }


    @PatchMapping
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<VocabularyDto.ModifyRequest> requests) {
        vocabularyService.modifyVocabulary(requests);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping
    public ResponseEntity<Void> remove(
            @RequestBody @Valid DeleteIdListRequest request) {
        vocabularyService.removeVocabulary(request.getIdList());
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public Page<VocabularyDto.Response> getResponse(
            @PageableDefault Pageable pageable) {
        return vocabularyService.findAllVocabulary(pageable);
    }
}
