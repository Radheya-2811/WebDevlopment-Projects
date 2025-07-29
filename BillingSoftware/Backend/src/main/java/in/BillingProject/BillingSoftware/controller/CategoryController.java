package in.BillingProject.BillingSoftware.controller;

import in.BillingProject.BillingSoftware.io.CategoryRequest;
import in.BillingProject.BillingSoftware.io.CategoryResponse;
import in.BillingProject.BillingSoftware.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;


@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestBody CategoryRequest request) {
        return  categoryService.add(request);
    }

    @GetMapping
    public List<CategoryResponse> getAllCategories() {
        return  categoryService.read();
    }
}
