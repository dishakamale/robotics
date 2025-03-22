---
title: Research
type: landing

sections:
  # - block: markdown
  #   content:
  #     title: ""
  #     text: ""
  #   design:
  #     spacing:
  #       padding: ["100px", "0", "0", "0"]

  - block: markdown
    content:
      title: ""
      text: |
        <div style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('/robotics/img/research.jpg'); background-size: 80%; background-position: center; background-repeat: no-repeat; height: 400px; margin-bottom: 30px; border-radius: 10px;"></div>
    design:
      spacing:
        padding: ["50px", "0", "0", "0"]

  - block: portfolio
    id: perception-aware-planning  # Add this ID
    content:
      title: Perception-Aware Planning
      subtitle: "Traditionally, perception-aware planning is addressed in a sequential way. However, owing to real-world sensing limitations and to ensure timely decision-making, it is important to account for any relevant, potentially incomplete perception information at hand and instantiate planning. The decisions can be further refined as the robots gain more knowledge about the environment. To address this, my work considers evolution of semantic information and studies the interleaving between incrementally improving perception and the corresponding decisions to enable safer, timely decision-making."
      filters:
        folders:
          - perception-projects
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
      #section_width: standard

  - block: portfolio
    id: optimal-planning-with-user-preferences
    content:
      title: Optimal Planning with User Preferences
      subtitle: "Often, the complex tasks assigned to robots could have infeasible or conflicting sub-requirements. In such cases, the traditional formal control synthesis approaches fail. In order to achieve meaningful task satisfaction in scuh scenarios rather than *giving up* altogether, we propose formal planning frameworks that incorporate user preferences for addressing potential infeasibilities and optimally plan for tasks."
      filters:
        folders:
          - user-projects
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
      spacing:
        padding: ["50px", "0", "0", "0"]
      #section_width: wide

  - block: portfolio
    id: tli
    content:
      title: Learning Task Specifications from Time-series Data
      filters:
        folders:
          - tli
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
      spacing:
        padding: ["50px", "0", "0", "0"]

  - block: portfolio
    id: misc
    content:
      title: Past Projects
      filters:
        folders:
          - misc
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
      spacing:
        padding: ["50px", "0", "0", "0"]
---

<style>
.container {
  max-width: 800px !important;
}
.article-container {
  max-width: 800px !important;
}
</style>