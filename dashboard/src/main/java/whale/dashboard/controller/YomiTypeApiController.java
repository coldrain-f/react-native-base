package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.YomiTypeDto;
import whale.dashboard.service.YomiTypeService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/yomi-types")
@Validated
public class YomiTypeApiController {

    private final YomiTypeService yomiTypeService;

    @PostMapping
    public ResponseEntity<Void> register(
            @RequestBody @Valid List<YomiTypeDto.RegistrationRequest> requests) {
        yomiTypeService.registerYomiType(requests);
        return ResponseEntity.ok().build();
    }


    @PatchMapping
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<YomiTypeDto.ModifyRequest> requests) {
        yomiTypeService.modifyYomiType(requests);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping
    public ResponseEntity<Void> remove(
            @RequestBody @Valid DeleteIdListRequest request) {
        yomiTypeService.removeYomiType(request.getIdList());
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public Page<YomiTypeDto.Response> getResponse(
            @PageableDefault Pageable pageable) {
        return yomiTypeService.findAllYomiType(pageable);
    }
}
