package whale.dashboard.dto;

import lombok.*;
import org.springframework.data.domain.Page;
import whale.dashboard.entity.Vocabulary;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;


public class VocabularyDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "Title을 입력해주세요.")
        private String title;

        @NotBlank(message = "Description을 입력해주세요.")
        private String description;

        public RegistrationRequest(String title, String description) {
            this.title = title;
            this.description = description;
        }

        public static List<Vocabulary> toEntityList(List<RegistrationRequest> registrationRequests) {
            return registrationRequests.stream()
                    .map(request -> Vocabulary.builder()
                            .title(request.getTitle())
                            .description(request.getDescription())
                            .build())
                    .collect(Collectors.toList());
        }
    }


    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ModifyRequest {

        @NotNull(message = "수정할 ID를 입력해주세요.")
        private Long id;

        @NotBlank(message = "Title을 입력해주세요.")
        private String title;

        @NotBlank(message = "Description을 입력해주세요.")
        private String description;

        public ModifyRequest(Long id, String title, String description) {
            this.id = id;
            this.title = title;
            this.description = description;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String title;
        private String description;

        @Builder
        public Response(Long id, String title, String description) {
            this.id = id;
            this.title = title;
            this.description = description;
        }


        public static Response of(Vocabulary vocabulary) {
            return Response.builder()
                    .id(vocabulary.getId())
                    .title(vocabulary.getTitle())
                    .description(vocabulary.getDescription())
                    .build();
        }


        public static Page<Response> toPage(Page<Vocabulary> vocabularyPage) {
            return vocabularyPage.map(Response::of);
        }
    }
}
