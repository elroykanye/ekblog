package com.elroykanye.ekblogserver.data.entity;

import com.elroykanye.ekblogserver.data.SectionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "postsection")
public class PostSection {
	@Id
	private Long id;

	@Column(name = "order", nullable = false)
	private Integer order;

	@Column(name = "content", nullable = false)
	private String content;

	@Enumerated
	@Column(name = "section_type", nullable = false)
	private SectionType sectionType;

	@ManyToOne(optional = false)
	@JoinColumn(name = "post_id", nullable = false)
	private Post post;


}
