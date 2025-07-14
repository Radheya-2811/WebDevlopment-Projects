package in.BillingProject.BillingSoftware.service;

import in.BillingProject.BillingSoftware.io.CategoryRequest;
import in.BillingProject.BillingSoftware.io.CategoryResponse;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
}
