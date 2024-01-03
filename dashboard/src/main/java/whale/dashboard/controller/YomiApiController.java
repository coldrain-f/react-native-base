package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.YomiDto;
import whale.dashboard.service.YomiService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class YomiApiController {

    private final YomiService yomiService;

    @PostMapping("/kanjis/{id}/yomi")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody List<YomiDto.RegistrationRequest> requests) {
        yomiService.registerYomi(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/yomi")
    public ResponseEntity<Void> modify(@RequestBody List<YomiDto.ModifyRequest> requests) {
        yomiService.modifyYomi(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/yomi")
    public ResponseEntity<Void> remove(
            @RequestBody DeleteIdListRequest request) {
        yomiService.removeYomi(request.getIdList());
        return ResponseEntity.ok().build();
    }
}
