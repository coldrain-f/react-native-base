package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
}
