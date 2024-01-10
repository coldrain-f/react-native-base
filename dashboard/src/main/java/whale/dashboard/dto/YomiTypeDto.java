package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.YomiType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class YomiTypeDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "Name을 입력해주세요.")
        private String name;

        public RegistrationRequest(String name) {
            this.name = name;
        }

        public static List<YomiType> toEntityList(List<YomiTypeDto.RegistrationRequest> registrationRequests) {
            return registrationRequests.stream()
                    .map(request -> YomiType.builder()
                            .name(request.getName())
                            .build())
                    .collect(Collectors.toList());
        }
    }

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ModifyRequest {

        @NotNull(message = "수정할 대상 ID를 입력해주세요.")
        private Long id;

        @NotBlank(message = "Name을 입력해주세요.")
        private String name;

        public ModifyRequest(Long id, String name) {
            this.id = id;
            this.name = name;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String name;

        @Builder
        public Response(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public static Response of(YomiType yomiType) {
            return Response.builder()
                    .id(yomiType.getId())
                    .name(yomiType.getName())
                    .build();
        }
    }
}
