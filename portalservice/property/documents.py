from django_opensearch_dsl import Document
from django_opensearch_dsl.registries import registry
from property.settings import PROPERT_SEARCH_IDX
from .models import Property


@registry.register_document
class PropertyDocument(Document):
    class Index:
        name = PROPERT_SEARCH_IDX  # Name of the Opensearch index
        # See Opensearch Indices API reference for available settings
        settings = {
            'number_of_shards': 1,
            'number_of_replicas': 1
        }
        """
            Configure how the index should be refreshed after an update.
            See Opensearch documentation for supported options.
            This per-Document setting overrides 
                settings.OPENSEARCH_DSL_AUTO_REFRESH.
        """

        auto_refresh = True

    class Django:
        model = Property  # The model associated with this Document
        # The fields of the model you want to be indexed in Opensearch
        fields = [
            'owner_name',
            'location_name',
            'latitute',
            'longtitue',
            'market_price',
            'offer_price',
            'contact_num1'
        ]

        """
            Paginate the django queryset used to populate the index with the 
            specified size. This per-Document setting overrides 
            settings.OPENSEARCH_DSL_QUERYSET_PAGINATION.
        """
        queryset_pagination = 20

    # location = fields.KeywordField()
