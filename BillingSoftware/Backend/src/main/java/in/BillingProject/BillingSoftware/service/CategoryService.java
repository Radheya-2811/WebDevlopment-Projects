package in.BillingProject.BillingSoftware.service;

import in.BillingProject.BillingSoftware.io.CategoryRequest;
import in.BillingProject.BillingSoftware.io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);

    List<CategoryResponse> read();

    void delete(String categoryId);
}
