package com.elroykanye.ekblogserver.data.entity;


@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "postcomment")
public class PostComment {
	@Id	private Long postcommentId;
}
