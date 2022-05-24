package com.elroykanye.ekblogserver.data.entity;


@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "postsection")
public class PostSection {
	@Id	private Long postsectionId;
}
