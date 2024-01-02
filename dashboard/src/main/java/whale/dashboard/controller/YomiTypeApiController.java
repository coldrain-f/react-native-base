package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.YomiTypeDto;
import whale.dashboard.service.YomiTypeService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/yomi-types")
public class YomiTypeApiController {

    private final YomiTypeService yomiTypeService;

    @PostMapping
    public ResponseEntity<Void> register(
            @RequestBody List<YomiTypeDto.RegistrationRequest> requests) {
        yomiTypeService.registerYomiType(requests);
        return ResponseEntity.ok().build();
    }


    @PatchMapping
    public ResponseEntity<Void> modify(
            @RequestBody List<YomiTypeDto.ModifyRequest> requests) {
        yomiTypeService.modifyYomiType(requests);
        return ResponseEntity.ok().build();
    }
}
