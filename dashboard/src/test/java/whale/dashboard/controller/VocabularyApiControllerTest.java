package whale.dashboard.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import whale.dashboard.BaseControllerTest;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.VocabularyDto;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class VocabularyApiControllerTest extends BaseControllerTest {

    @Test
    @DisplayName("단어장 등록")
    void registerVocabulary() throws Exception {
        VocabularyDto.RegistrationRequest request1 = new VocabularyDto.RegistrationRequest("Test Title", "Test Description");
        VocabularyDto.RegistrationRequest request2 = new VocabularyDto.RegistrationRequest("Test Title2", "Test Description2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.post("/api/vocabulary")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("단어장 수정")
    void modifyVocabulary() throws Exception {
        VocabularyDto.ModifyRequest request1 = new VocabularyDto.ModifyRequest(1L, "Modified Title", "Modified Description");
        VocabularyDto.ModifyRequest request2 = new VocabularyDto.ModifyRequest(2L, "Modified Title2", "Modified Description2");

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.patch("/api/vocabulary")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(List.of(request1, request2))));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("단어장 삭제")
    void removeVocabulary() throws Exception {
        DeleteIdListRequest request = new DeleteIdListRequest(Arrays.asList(1L, 2L));

        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.delete("/api/vocabulary")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)));

        resultActions.andExpect(status().isOk());
    }

    @Test
    @DisplayName("단어장 조회")
    void findAllVocabulary() throws Exception {
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/api/vocabulary")
                .contentType(MediaType.APPLICATION_JSON));

        resultActions.andExpect(status().isOk());
    }
}
