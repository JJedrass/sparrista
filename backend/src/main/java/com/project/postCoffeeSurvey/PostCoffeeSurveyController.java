package com.project.postCoffeeSurvey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class PostCoffeeSurveyController {
    @Autowired
    private PostCoffeeSurveyServiceImpl postCoffeeSurveyService;
}