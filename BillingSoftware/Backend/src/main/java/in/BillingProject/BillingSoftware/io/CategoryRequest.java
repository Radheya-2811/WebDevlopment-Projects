package in.BillingProject.BillingSoftware.io;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Builder
@Data
@AllArgsConstructor
public class CategoryRequest {
    private String categoryId;
    private String name;
    private String description;
    private String bgColor;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String imgUrl;
}
