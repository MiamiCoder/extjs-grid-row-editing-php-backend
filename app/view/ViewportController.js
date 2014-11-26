Ext.define('App.view.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',
    onRowEditorEdit: function (editor, ctx, eOpts) {
        var vendorColIdx = 2;
        var combo = ctx.grid.columns[vendorColIdx].getEditor(ctx.record);
        var vendorRecord = combo.findRecord('name', combo.getValue());
        ctx.record.set('vendorId', vendorRecord.get('id'));
        ctx.grid.getStore().sync();  // Force a post with the updated data.
    }
});