package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.WordDto;
import whale.dashboard.service.WordService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class WordApiController {

    private final WordService wordService;

    @PostMapping("/yomi/{id}/words")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody List<WordDto.RegistrationRequest> requests) {
        wordService.registerWords(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/words")
    public ResponseEntity<Void> modify(@RequestBody List<WordDto.ModifyRequest> requests) {
        wordService.modifyWords(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/words")
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        wordService.removeWords(request.getIdList());
        return ResponseEntity.ok().build();
    }
}
