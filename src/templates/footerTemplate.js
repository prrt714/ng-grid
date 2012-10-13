﻿﻿kg.templates.defaultFooterTemplate = function (options) {
    var b = new kg.utils.StringBuilder();
    b.append('<div class="kgTotalSelectContainer" data-bind="visible: footerVisible">');
    b.append(    '<div class="kgFooterTotalItems" data-bind="css: {\'kgNoMultiSelect\': !isMultiSelect()}" >');
    b.append(        '<span class="kgLabel">Total Items:</span> <span data-bind="text: maxRows"></span>');
    b.append(    '</div>');
    b.append(    '<div class="kgFooterSelectedItems" data-bind="visible: isMultiSelect">');
    b.append(        '<span class="kgLabel">Selected Items:</span> <span data-bind="text: selectedItemCount"></span>');
    b.append(    '</div>');
    b.append('</div>');
    b.append('<div class="kgPagerContainer" data-bind="visible: pagerVisible() && footerVisible(), css: {\'kgNoMultiSelect\': !isMultiSelect()}">');
    b.append(    '<div style="float: right;">');
    b.append(        '<div class="kgRowCountPicker">');
    b.append(            '<span class="kgLabel">Rows:</span>');
    b.append(            '<select data-bind="options: pageSizes, value: selectedPageSize">');
    b.append(            '</select>');
    b.append(        '</div>');
    b.append(        '<div class="kgPagerControl" style="float: left; min-width: 135px;">');
    b.append(            '<input class="kgPagerFirst" type="button" data-bind="click: pageToFirst, enable: canPageBackward" title="First Page"/>');
    b.append(            '<input class="kgPagerPrev" type="button"  data-bind="click: pageBackward, enable: canPageBackward" title="Previous Page"/>');
    b.append(            '<input class="kgPagerCurrent" type="text" data-bind="value: protectedCurrentPage, enable: maxPages() > 1" />');
    b.append(            '<input class="kgPagerNext" type="button"  data-bind="click: pageForward, enable: canPageForward" title="Next Page"/>');
    b.append(            '<input class="kgPagerLast" type="button"  data-bind="click: pageToLast, enable: canPageForward" title="Last Page"/>');
    b.append(        '</div>');
    b.append(    '</div>');
    b.append('</div>');
    return b.toString();
};