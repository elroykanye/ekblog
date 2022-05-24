package com.elroykanye.ekblogserver.data.entity;


@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "contact")
public class Contact {
	@Id	private Long contactId;
}
