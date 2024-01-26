package whale.dashboard.dto;

import lombok.*;
import whale.dashboard.entity.Category;
import whale.dashboard.entity.Vocabulary;
import whale.dashboard.exception.VocabularyNotFoundException;
import whale.dashboard.repository.VocabularyRepository;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

public class CategoryDto {

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class RegistrationRequest {

        @NotBlank(message = "Subject를 입력해주세요.")
        private String subject;

        @NotBlank(message = "Description을 입력해주세요.")
        private String description;

        public RegistrationRequest(String subject, String description) {
            this.subject = subject;
            this.description = description;
        }


        public static List<Category> toEntityList(Long vocabularyId, List<RegistrationRequest> requests, VocabularyRepository vocabularyRepository) {
            return requests.stream()
                    .map(request -> {
                        Vocabulary vocabulary = vocabularyRepository.findById(vocabularyId)
                                .orElseThrow(() -> new VocabularyNotFoundException(vocabularyId));

                        return Category.builder()
                                .subject(request.getSubject())
                                .description(request.getDescription())
                                .vocabulary(vocabulary)
                                .build();
                    })
                    .collect(Collectors.toList());
        }
    }

    @Data
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ModifyRequest {

        @NotNull(message = "수정할 대상 ID를 입력해주세요.")
        private Long id;

        @NotBlank(message = "Subject를 입력해주세요.")
        private String subject;

        @NotBlank(message = "Description을 입력해주세요.")
        private String description;

        public ModifyRequest(Long id, String subject, String description) {
            this.id = id;
            this.subject = subject;
            this.description = description;
        }
    }


    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response {
        private Long id;
        private String subject;
        private String description;
        private VocabularyDto.Response vocabulary;

        @Builder
        public Response(Long id, String subject, String description, VocabularyDto.Response vocabulary) {
            this.id = id;
            this.subject = subject;
            this.description = description;
            this.vocabulary = vocabulary;
        }

        public static Response of(Category category) {
            return Response.builder()
                    .id(category.getId())
                    .subject(category.getSubject())
                    .description(category.getDescription())
                    .vocabulary(category.getVocabulary() != null ? VocabularyDto.Response.of(category.getVocabulary()) : null)
                    .build();
        }
    }
}
