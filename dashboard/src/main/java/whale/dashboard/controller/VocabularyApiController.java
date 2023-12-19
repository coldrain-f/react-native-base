package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
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
    public ResponseEntity<Void> register(
            @RequestBody List<VocabularyDto.RegistrationRequest> requests) {
        vocabularyService.registerVocabulary(requests);
        return ResponseEntity.ok().build();
    }


    @PatchMapping
    public ResponseEntity<Void> modify(
            @RequestBody List<VocabularyDto.ModifyRequest> requests) {
        vocabularyService.modifyVocabulary(requests);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        List<Long> removeIds = request.getIdList();
        vocabularyService.removeVocabulary(removeIds);
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public ResponseEntity<List<VocabularyDto.Response>> getResponse() {
        List<Vocabulary> vocabulary = vocabularyService.findAllVocabulary();
        List<VocabularyDto.Response> response = VocabularyDto.Response.toList(vocabulary);
        return ResponseEntity.ok(response);
    }
}
