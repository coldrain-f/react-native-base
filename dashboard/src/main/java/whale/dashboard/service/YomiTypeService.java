package whale.dashboard.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import whale.dashboard.dto.YomiTypeDto;
import whale.dashboard.entity.YomiType;
import whale.dashboard.exception.YomiTypeNotFoundException;
import whale.dashboard.repository.YomiTypeRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class YomiTypeService {

    private final YomiTypeRepository yomiTypeRepository;

    @Transactional
    public void registerYomiType(List<YomiTypeDto.RegistrationRequest> requests) {
        List<YomiType> yomiTypeList = YomiTypeDto.RegistrationRequest.toEntityList(requests);
        yomiTypeRepository.saveAll(yomiTypeList);
    }


    @Transactional
    public void modifyYomiType(List<YomiTypeDto.ModifyRequest> requests) {
        for (YomiTypeDto.ModifyRequest request : requests) {
            YomiType yomiType = yomiTypeRepository.findById(request.getId())
                    .orElseThrow(() -> new YomiTypeNotFoundException("YomiType Not Found with id : " + request.getId()));

            yomiType.change(request.getName());
        }
    }
}
