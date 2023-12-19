package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.VocabularyDto;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.service.VocabularyService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vocabulary")
public class VocabularyApiController {

    private final VocabularyService vocabularyService;

    @PostMapping
    public ResponseEntity<String> register(
            @RequestBody List<VocabularyDto.RegistrationRequest> requests) {
        vocabularyService.registerVocabulary(requests);
        return ResponseEntity.ok("Vocabulary register 성공");

    }


    @PatchMapping
    public ResponseEntity<String> modify(
            @RequestBody List<VocabularyDto.ModifyRequest> requests) {
        vocabularyService.modifyVocabulary(requests);
        return ResponseEntity.ok("Vocabulary update 성공");
    }


    @DeleteMapping
    public ResponseEntity<Void> remove(
            @RequestParam List<Long> vocabularyIds) {
        vocabularyService.removeVocabulary(vocabularyIds);
        return ResponseEntity.noContent().build();
    }


    @GetMapping
    public ResponseEntity<List<VocabularyDto.Response>> getResponse() {
        List<Vocabulary> vocabulary = vocabularyService.findAllVocabulary();
        List<VocabularyDto.Response> response = VocabularyDto.Response.toList(vocabulary);
        return ResponseEntity.ok(response);
    }
}
