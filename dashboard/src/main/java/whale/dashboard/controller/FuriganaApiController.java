package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.FuriganaDto;
import whale.dashboard.service.FuriganaService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class FuriganaApiController {

    private final FuriganaService furiganaService;

    @PostMapping("/words/{id}/furigana")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody @Valid List<FuriganaDto.RegistrationRequest> requests) {
        furiganaService.registerFurigana(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/furigana")
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<FuriganaDto.ModifyRequest> requests) {
        furiganaService.modifyFurigana(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/furigana")
    public ResponseEntity<Void> remove(
            @RequestBody @Valid DeleteIdListRequest request) {
        furiganaService.removeFurigana(request.getIdList());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/words/{id}/furigana")
    public Page<FuriganaDto.Response> getResponse(
            @PathVariable Long id,
            @PageableDefault Pageable pageable) {
        return furiganaService.findByWordId(id, pageable);
    }
}
