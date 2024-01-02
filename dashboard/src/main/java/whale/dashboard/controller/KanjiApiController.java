package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.KanjiDto;
import whale.dashboard.service.KanjiService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class KanjiApiController {

    private final KanjiService kanjiService;

    @PostMapping("/categories/{id}/kanjis")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody List<KanjiDto.RegistrationRequest> requests) {
        kanjiService.registerKanji(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/kanjis")
    public ResponseEntity<Void> modify(@RequestBody List<KanjiDto.ModifyRequest> requests) {
        kanjiService.modifyKanjis(requests);
        return ResponseEntity.ok().build();
    }
}
