package com.elroykanye.ekblogserver.data.entity;


@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post")
public class Post {
	@Id	private Long postId;
}
