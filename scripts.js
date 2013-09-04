var wpMediaGrid;

(function($) {
	wpMediaGrid = {
		init: function() {
			$( '.media-item' ).on('click', function() {
				var id = $(this).data('id'),
					details = $(this).find( '.media-details' ).html(),
					selected = $('#selected-media-details .selected-media');

				if ( $(this).hasClass('selected') ) {
					$(this).removeClass('selected');
					selected.find( '#detail-' + id ).remove();
				} else {
					$(this).addClass('selected');
					selected.prepend('<li class="selected-details" id="detail-' + id + '" data-id="' + id + '">' + details + '</li>');
				}

				wpMediaGrid.selectedCount();
			});

			$( '#selected-media-details' ).on( 'click', '.selected-details', function() {
				var id = $(this).data('id'),
					item = $('#media-' + id);
				$(this).remove();
				item.removeClass('selected');
			});
		},

		selectedCount: function() {
			var selected = $('#selected-media-details .selected-details')
				count = $( '#selected-media-details .selected-count strong' );

			count.html( selected.length );
		}
	}

	$(document).ready(function($){ wpMediaGrid.init(); });
})(jQuery);