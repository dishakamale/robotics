---
title: Research
type: landing

sections:
  - block: markdown
    content:
      title: ""
      text: ""
    design:
      spacing:
        padding: ["20px", "0", "0", "0"]

  - block: portfolio
    content:
      title: Perception-Aware Planning
      filters:
        folders:
          - project
        categories:
          - Perception-Aware
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

  - block: portfolio
    content:
      title: User Planning with User Preferences
      filters:
        folders:
          - project
        categories:
          - User-Planning
      
    design:
      columns: '1'
      view: showcase
      spacing:
        padding: ["100px", "0", "0", "0"]
---