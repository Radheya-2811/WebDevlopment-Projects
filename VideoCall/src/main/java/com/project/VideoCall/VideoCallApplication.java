package com.project.VideoCall;

import com.project.VideoCall.user.User;
import com.project.VideoCall.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VideoCallApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideoCallApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(UserService service){
		return args -> {
			service.register(User.builder()
							.username("Harsh")
							.email("harsh@gmail.com")
							.password("1234")
							.build());

			service.register(User.builder()
					.username("Thanos")
					.email("thanos@gmail.com")
					.password("1234")
					.build());

			service.register(User.builder()
					.username("robert")
					.email("robert@gmail.com")
					.password("1234")
					.build());

			service.register(User.builder()
					.username("natasha")
					.email("natasha@gmail.com")
					.password("1234")
					.build());
		};
	}
}
