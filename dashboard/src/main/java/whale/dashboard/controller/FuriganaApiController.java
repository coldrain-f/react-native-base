package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.FuriganaDto;
import whale.dashboard.service.FuriganaService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FuriganaApiController {

    private final FuriganaService furiganaService;

    @PostMapping("/words/{id}/furigana")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody List<FuriganaDto.RegistrationRequest> requests) {
        furiganaService.registerFurigana(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/furigana")
    public ResponseEntity<Void> modify(@RequestBody List<FuriganaDto.ModifyRequest> requests) {
        furiganaService.modifyFurigana(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/furigana")
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        furiganaService.removeFurigana(request.getIdList());
        return ResponseEntity.ok().build();
    }
}
