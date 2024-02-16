package whale.dashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class DashboardController {

    @GetMapping("/vocabulary")
    public String vocabulary() {
        return "/admin/vocabulary";
    }

    @GetMapping("/category")
    public String category() {
        return "/admin/category";
    }

    @GetMapping("/kanji")
    public String kanji() {
        return "/admin/kanji";
    }

    @GetMapping("/yomi-type")
    public String yomiType() {
        return "/admin/yomi-type";
    }

    @GetMapping("/yomi")
    public String yomi() {
        return "/admin/yomi";
    }

    @GetMapping("/word")
    public String word() {
        return "/admin/word";
    }

    @GetMapping("/furigana")
    public String furigana() {
        return "/admin/furigana";
    }

}
