# Collapsible Bootstrap Menu

Collapsible bootstrap menu is beautiful collapsible verticle menu for any web application.  This repo is for how to add this menu in meteor based application. But you can surely use this menu in any web application as jquery plugin.

http://www.jqueryscript.net/menu/Bootstrap-Style-Vertical-Accordion-Menu-with-jQuery-CSS3-bs-leftnavi.html


#### Step 1: Clone Package
Clone this git repo in your packages directory (if does not exist then create one).

#### Step 2: Add Package
meteor add meteor-collapsible-bootstrap-menu

#### Step 3: Menu HTML
Example:
```html
<div class="gw-sidebar">
  <div id="gw-sidebar" class="gw-sidebar">
    <div class="nano-content">
      <ul class="gw-nav gw-nav-list">
        <li class="init-un-active">
          <a href="javascript:void(0)">
            <span class="gw-menu-text">
              <a href="#">
                PROJECT
                <button type="button" name="button" class="btn btn-success pull-right add-project btn-sm">+</button>
              </a>
            </span>
          </a>
        </li>
        {{#each projects}}
        <li class="init-arrow-down"> <a href="javascript:void(0)"><span class="gw-menu-text">{{project.name}}</span><b class="gw-arrow"></b> </a>
          <ul class="gw-submenu">
            <li>
              <a href="{{pathFor 'projectAnalysis' _id=_id}}">Analysis</a>
            </li>
            <li>
              <a href="{{pathFor 'projectQuotes' _id=_id}}">Quotes</a>
            </li>
            <li>
              <a href="#">Comparison</a>
            </li>
            <li>
              <a href="{{pathFor 'addProject' _id=_id monitor=monitor}}">Project Settings</a>
            </li>
          </ul>
        </li>
        {{/each}}
      </ul>
    </div>
  </div>
</div>
```

## Step 4: Initialize
In your Template.<name>.onRendered event write "sideMenu()" code to Initialize menu.

That's all folks :+1:
