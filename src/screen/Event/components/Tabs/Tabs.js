// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';

const EventInfoTab = () => (
    <View>
        <Text>EventInfo</Text>
    </View>
);

const LocationInfoTab = () => (
    <View>
        <Text>LocationInfo</Text>
    </View>
);

const NotesTab = () => (
    <View>
        <Text>Notes</Text>
    </View>
);

type Route = { key: string, title: string, icon: string };

type State = {
    index: number,
    routes: Array<Route>,
};

type Props = {
    pageColor: string,
};

export class Tabs extends React.Component<Props, State> {
    static defaultProps = {
        pageColor: '#e62270',
    };

    state = {
        index: 0,
        routes: [
            { key: 'info', title: 'Info', icon: 'info-circle' },
            { key: 'location', title: 'Location', icon: 'location-arrow' },
            { key: 'notes', title: 'Notes', icon: 'sticky-note' },
        ],
    };

    renderIcon = ({ route }: { route: Route }) => (
        <FontAwesome size={24} color={this.props.pageColor} name={route.icon} />
    );

    renderNothing = () => null;

    render(): React.Node {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    info: EventInfoTab,
                    location: LocationInfoTab,
                    notes: NotesTab,
                })}
                onIndexChange={index => this.setState({ index })}
                tabBarPosition="bottom"
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        renderIcon={this.renderIcon}
                        renderLabel={this.renderNothing}
                        style={{
                            backgroundColor: '#fff',
                        }}
                        labelStyle={{ color: '#545454' }}
                        indicatorStyle={{
                            backgroundColor: this.props.pageColor,
                        }}
                        useNativeDriver
                    />
                )}
            />
        );
    }
}
