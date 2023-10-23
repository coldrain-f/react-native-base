package whale.dashboard.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/sample")
public class SampleController {

    @GetMapping("/{id}")
    public String sample(@PathVariable String id) {
        log.info("/sample/sample{}", id);
        return "/sample/sample" + id;
    }
}
